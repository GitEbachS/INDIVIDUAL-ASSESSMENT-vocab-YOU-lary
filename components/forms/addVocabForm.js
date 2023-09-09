const vocabForm = () => {
  const domString = `
  
  <div class="mb-3">
    <label for="title" class="form-label addForm">Title</label>
    <input type="text" class="form-control" id="title" aria-describedby="emailHelp" placeholder= "Enter word" value="" required>
  <div class="mb-3">
    <label for="definition" class="form-label addForm">definition</label>
    <input type="text" class="form-control" id="definition" placeholder= "Enter definition" value="" required>
  </div>
  <select class="form-select" id="languageTech" aria-label="Default select example">
    <option selected>Language</option>
    <option value="CSS">CSS</option>
    <option value="HTML">HTML</option>
    <option value="JavaScript">JavaScript</option>
</select>
  <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Submit</button>
  </form>
`;
  return domString;
};

export default vocabForm;
