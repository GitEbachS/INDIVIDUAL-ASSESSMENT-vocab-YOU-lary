const vocabForm = () => {
  const domString = `
  
  <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input type="text" class="form-control" id="title" aria-describedby="emailHelp" placeholder= "Enter word" value="" required>
  <div class="mb-3">
    <label for="definition" class="form-label">definition</label>
    <input type="text" class="form-control" id="definition" placeholder= "Enter definition" value="" required>
  </div>
  <select class="form-select" id="languageTech" aria-label="Default select example">
    <option selected>Language</option>
    <option value="1">CSS</option>
    <option value="2">HTML</option>
    <option value="3">JavaScript</option>
</select>
  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
  </form>
`;
  return domString;
};

export default vocabForm;
