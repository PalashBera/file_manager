export default function validateFolderInput(data) {
  let errors = {};
  let validationResult = false;

  if (data.name === undefined || data.name.trim().length === 0) {
    errors.name = 'This can\'t be blank.';
  } else if (data.name.trim().length > 30) {
    errors.name = 'Folder name should be less than 30 characters.';
  }

  if (Object.keys(errors).length === 0) {
    validationResult = true;
  }

  return {
    errors,
    isValid: validationResult
  }
}