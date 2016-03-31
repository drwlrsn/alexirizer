try {
  var name = document.getElementsByClassName('name')[0].innerText
} catch (e) {
  var name = document.getElementsByClassName('author-name')[0].innerText
}
if (name.toLowerCase().includes('alex macpherson')) {
  document.getElementsByClassName('avatar')[0].src = 'http://i.imgur.com/xrxBbb4.png';
  var elements = document.getElementsByTagName('*');

  for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      for (var j = 0; j < element.childNodes.length; j++) {
          var node = element.childNodes[j];

          if (node.nodeType === 3) {
              var text = node.nodeValue;
              var replacedText = text.replace(/March/gi, 'Never Say Never')
              .replace(/Business/gi, 'Empire').replace(/Saskatoon/gi, 'Death Star')
              .replace(/Saskatchewan|Sask\.?/gi, 'Tatooine').replace(/market$/gi, 'rebellion')
              .replace(/(Don )?Atchison/gi, 'BB-8').replace(/report/gi, 'holo')
              .replace(/Alex MacPherson/gi, 'Alex "Hairball" MacPherson');

              if (replacedText !== text) {
                  element.replaceChild(document.createTextNode(replacedText), node);
              }
          }
      }
  }
}
