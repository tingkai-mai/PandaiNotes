import { Editor } from "@tinymce/tinymce-react";
import { useState, useRef, useEffect } from "react";

const axios = require("axios");
const form_info =
  '<p><img src="https://dog.ceo/api/breeds/image/random Fetch" alt="" width="NaN" height="NaN" /><img src="https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1721.jpg" alt="" width="390" height="263" /></p>\n<p>This is <span style="text-decoration: line-through;">my </span><span style="text-decoration: underline;">dog</span>. His <strong>name&nbsp;</strong>is <span style="text-decoration: line-through; background-color: #2dc26b;">Lucky</span>.<span style="font-family: georgia, palatino, serif;"> I love Lucky.</span></p>\n<p style="padding-left: 40px;">Sample Paragraphing</p>\n<ol>\n<li>One</li>\n<li>Two</li>\n<li>Three</li>\n<li>Four</li>\n<li>Five</li>\n<li>Six</li>\n<li>Seven</li>\n</ol>\n<table style="border-collapse: collapse; width: 100.048%;" border="1">\n<tbody>\n<tr>\n<td style="width: 31.6303%;">Test</td>\n<td style="width: 31.6303%;">test</td>\n<td style="width: 31.6319%;">Test</td>\n</tr>\n<tr>\n<td style="width: 31.6303%;">test</td>\n<td style="width: 31.6303%;">test test</td>\n<td style="width: 31.6319%;">test</td>\n</tr>\n<tr>\n<td style="width: 31.6303%;">test</td>\n<td style="width: 31.6303%;">\n<p>test</p>\n<p>&nbsp;</p>\n</td>\n<td style="width: 31.6319%;">test</td>\n</tr>\n</tbody>\n</table>\n<p>&nbsp;</p>\n<p><iframe src="https://www.youtube.com/embed/L7OLY4HCctQ" width="560" height="314" allowfullscreen="allowfullscreen"></iframe></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet metus rhoncus, vestibulum odio at, porttitor nisi. Duis libero est, congue luctus scelerisque sed, commodo non ipsum. Nam eros leo, mattis ut dui id, efficitur finibus arcu. Mauris in iaculis lectus, eget convallis ligula. Donec sit amet ultricies nulla. Aenean at mi diam. Donec ornare, urna et eleifend egestas, ante sem dictum ipsum, vitae lacinia velit diam non dui.</p>\n<p>Integer sit amet malesuada lectus. Praesent tincidunt, felis eget laoreet varius, massa velit mattis odio, at lobortis lacus elit vel elit. Etiam ut nulla efficitur, aliquet nulla sed, molestie risus. Pellentesque iaculis eleifend volutpat. Suspendisse malesuada neque eget dictum imperdiet. Curabitur accumsan hendrerit odio, sed maximus erat suscipit a. Praesent tempor, ligula ut lobortis pharetra, ipsum ex sagittis diam, non congue tortor quam et metus. Ut scelerisque luctus purus, in scelerisque nisl mollis ac. Nam pretium vehicula lacus, eget egestas nulla efficitur sed. Etiam finibus feugiat sapien. Nunc ut lectus sapien. Mauris dapibus, velit quis consequat gravida, nisi ipsum venenatis nisi, eget finibus nisl nisl in neque. Donec eu felis ut dui maximus rutrum et ut elit.</p>\n<p>Proin maximus eros posuere, scelerisque urna eu, lacinia dolor. Fusce non eros non lectus aliquet luctus vitae nec sapien. Sed facilisis, nisi eget feugiat porttitor, elit lectus viverra turpis, ac interdum ligula ante eget sapien. Morbi aliquam urna ornare justo iaculis accumsan. Cras ornare, ipsum sed dignissim suscipit, velit dui sagittis tortor, a aliquet nibh lacus id tortor. Morbi sagittis eros leo, quis viverra orci pharetra vitae. Sed sit amet facilisis orci, et feugiat metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed convallis libero eu nunc dictum luctus. Phasellus lacinia imperdiet ante efficitur molestie. Aliquam eleifend ante eu libero mattis, quis iaculis nisl porttitor. Quisque tortor ligula, laoreet eu dictum sed, facilisis vel nisi.</p>\n<p>Donec elementum est sem, nec convallis erat vestibulum nec. Praesent cursus elit turpis, vestibulum tincidunt felis ullamcorper ac. Nulla laoreet, quam a lacinia congue, lorem tellus maximus ex, nec maximus nisl nibh sit amet elit. Fusce ante elit, mollis a velit in, elementum vestibulum orci. Quisque in odio quis enim porttitor iaculis. Pellentesque finibus sem ut convallis luctus. Curabitur eu elit molestie, efficitur diam et, rutrum nibh. Nullam fermentum ex at ante gravida suscipit. Curabitur mollis tortor vitae eros viverra efficitur et sed risus.</p>\n<p>Integer ac dolor rutrum, auctor nunc at, sodales mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse malesuada libero ex, eget porttitor lacus fringilla ut. Aliquam sit amet ipsum magna. Vivamus tempor ex eu tellus cursus aliquam. Nunc sed vestibulum diam, convallis eleifend nulla. Vivamus consequat efficitur arcu nec varius. Phasellus ultrices egestas est at elementum. Pellentesque libero neque, imperdiet ac arcu ac, pellentesque dapibus velit. Aenean sit amet orci a quam luctus porttitor vel a purus. Donec lacus ante, feugiat a gravida vulputate, rutrum vitae lectus. Sed est urna, pretium eu pellentesque bibendum, viverra rutrum turpis. Vestibulum dapibus sit amet justo a tempor.</p>';

function DocumentEditor({ initialValue }) {
  const editorRef = useRef(null);
  const [dirty, setDirty] = useState(false);
  useEffect(() => setDirty(false), [initialValue]);
  const save = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      setDirty(false);
      editorRef.current.setDirty(false);

      axios
        .post("http://localhost:3000/api/v1/txtedit", {
          document_content: content,
        })
        .then((res) => {
          console.log(`statusCode: ${res.status}`);
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        });

      console.log(content);
    }
  };
  return (
    <>
      <Editor
        apiKey="d3f45aljwuxlcvru4bo029urhq9qjtrutg60orm85vtmuzxh"
        initialValue={form_info}
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
        onInit={(evt, editor) => (editorRef.current = editor)}
        onDirty={() => setDirty(true)}
      />
      <button onClick={save} disabled={!dirty}>
        Save
      </button>
      {dirty && <p>You have unsaved content!</p>}
    </>
  );
}

// const DocumentEditor = (props) => {
//   const handleEditorChange = (e) => {
//     console.log("Content was updated:", e.target.getContent());
//   };

//   return (
//     <form>
//       <Editor
//         apiKey="d3f45aljwuxlcvru4bo029urhq9qjtrutg60orm85vtmuzxh"
//         initialValue="<p>Initial content</p>"
//         init={{
//           height: "100vh",
//           menubar: false,
//           plugins: [
//             "advlist autolink lists link image",
//             "charmap print preview anchor help",
//             "searchreplace visualblocks code",
//             "insertdatetime media table paste wordcount",
//             "save",
//           ],
//           toolbar: [
//             "undo redo save | fontselect fontsizeselect | alignleft aligncenter alignright alignnone | formatselect | bullist numlist outdent indent | help ",
//             "bold italic underline strikethrough forecolor backcolor cut paste | image media | visualblocks table anchor",
//           ],
//         }}
//         onChange={handleEditorChange}
//       />
//     </form>
//   );
// };

export default DocumentEditor;
