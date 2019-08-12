var element = document.getElementsByTagName('iframe');

for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}
