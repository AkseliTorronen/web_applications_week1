import "./styles.css";

if (document.readyState !== "loading") {
  initialize_code();
} else {
  document.addEventListener("DOMConentLoaded", function () {
    initialize_code();
  });
}
function initialize_code() {
  const add_comment_button = document.getElementById("add-comment");
  const remove_comments_button = document.getElementById("remove-comments");

  add_comment_button.addEventListener("click", function () {
    const comments = document.getElementById("comment-section");

    let new_item = document.createElement("li");
    new_item.innerHTML = document.getElementById("comment-area").value;
    comments.appendChild(new_item);
  });

  remove_comments_button.addEventListener("click", function () {
    let result = confirm("I dunno like confirm or sum shid?");
    if (result) {
      document.getElementById("comment-section").innerHTML = "";
    } else {
      console.log("shid");
    }
  });
}

/** document.getElementById("app").innerHTML = `
 *<h1>Hello Vanilla!</h1>
 *<div>
 *  We use the same configuration as Parcel to bundle this sandbox, you can find more
 *  info about Parcel
 *  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
 *</div>
 *`;
 */
