window.addEventListener("load", start, false);

function start() {
  const textContainer = document.getElementById("container");
  textContainer.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci turpis, efficitur vitae nibh nec, finibus sagittis quam. In hac habitasse platea dictumst. Donec vitae scelerisque ipsum, id lacinia lorem. Suspendisse vitae vulputate est, feugiat imperdiet tortor. Integer commodo purus vitae molestie lacinia. Phasellus ut odio ac turpis tincidunt convallis ac sit amet nulla. Sed mattis elit vitae mauris laoreet eleifend. Praesent vulputate eros sit amet aliquet efficitur. In faucibus dui enim, nec convallis dolor consequat id. Suspendisse vel justo at arcu tempus rutrum. Maecenas tincidunt felis vel elit gravida, ac sodales libero hendrerit. Nam congue libero efficitur, pulvinar sapien tincidunt, pharetra dolor. Donec cursus, est at mollis placerat, mi massa congue neque, sit amet rhoncus mi ante ac elit. Maecenas a porttitor est. Praesent commodo lacus a eros dignissim, et rutrum purus aliquam. ";
  const textTyping = document.getElementById("typingArea");
  const demo = document.getElementById("demo");
  var i = 0;

  const text = textContainer.innerText;

  textTyping.addEventListener("keyup", (e) => {
    var text = textContainer.innerHTML;
    i = demo.getElementsByTagName("span").length;
    if (e.keyCode == 8) {
      console.log(i);
      deleteOneChar();
    } else {
      showResult(e.target.value.charAt(e.target.value.length - 1));
    }
  });

  function showResult(character) {
    if (character == text.charAt(i)) {
      console.log(character);
      demo.innerHTML += `<span style="background-color:rgba(159, 223, 140, 0.829);color:green">${character}</span>`;
    } else {
      demo.innerHTML += `<span style="background-color:rgba(235, 98, 98, 0.829);color:red">${character}</span>`;
    }
  }

  function deleteOneChar() {
    demo
      .getElementsByTagName("span")
      [demo.getElementsByTagName("span").length - 1].remove();
  }
}
