import { Editor } from "@tinymce/tinymce-react";

const DocumentEditor = (props) => {
  const handleEditorChange = (e) => {
    console.log("Content was updated:", e.target.getContent());
  };

  return (
    <form>
      <Editor
        apiKey="d3f45aljwuxlcvru4bo029urhq9qjtrutg60orm85vtmuzxh"
        initialValue="<p>Initial content</p>"
        init={{
          height: "100vh",
          menubar: false,
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount",
            "save",
          ],
          toolbar: [
            "undo redo save | fontselect fontsizeselect | alignleft aligncenter alignright alignnone | formatselect | bullist numlist outdent indent | help ",
            "bold italic underline strikethrough forecolor backcolor cut paste | image media | visualblocks table anchor",
          ],
        }}
        onChange={handleEditorChange}
      />
    </form>
  );
};

export default DocumentEditor;
