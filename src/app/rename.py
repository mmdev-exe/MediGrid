import os
import re

# Set the root directory path you want to process
root_directory = r"C:\Users\Admin\mmay\MediGrid\frontend\medigrid\public\3430-770"  # Change this to your desired path

# Function to sanitize filenames
def sanitize_filename(filename):
    # Remove spaces
    sanitized = filename.replace(" ", "")
    # Replace problematic characters with hyphens
    # This regex matches any character that isn't alphanumeric, period, underscore, or hyphen
    sanitized = re.sub(r'[^\w\.\-]', '-', sanitized)
    return sanitized

# Walk through directory tree
for dirpath, dirnames, filenames in os.walk(root_directory):
    # Process each file in current directory
    for filename in filenames:
        # Create full old path
        old_path = os.path.join(dirpath, filename)
        
        # Create new filename by sanitizing
        new_filename = sanitize_filename(filename)
        new_path = os.path.join(dirpath, new_filename)
        
        # Rename the file if the name has changed
        if old_path != new_path:
            try:
                os.rename(old_path, new_path)
                print(f"Renamed: '{old_path}' -> '{new_filename}'")
            except OSError as e:
                print(f"Error renaming '{old_path}': {e}")

print("Filename sanitization complete!")