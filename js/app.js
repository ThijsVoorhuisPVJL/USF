const chatHistory = [];
let userInput = '';

function startChat() {
  addMessage("Welkom! Ik ben de bot van de USF, je handige assistent voor het aansluiten van je Devine en HK speakers aan draaitafels. Hoe kan ik je helpen?", false);
}

document.getElementById('userInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

document.getElementById('sendButton').addEventListener('click', function() {
  sendMessage();
});

function sendMessage() {
  const userInput = document.getElementById('userInput').value;
  if (userInput.trim()) {
    addMessage(userInput, true);
    processQuestion(userInput);
    document.getElementById('userInput').value = '';
  }
}

function addMessage(text, isUser) {
  const chatBox = document.getElementById('chatBox');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('chat-message');
  messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
  messageDiv.innerHTML = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function processQuestion(question) {
  question = question.toLowerCase();
  const responses = [];

  if (question.includes("commands")) {
    responses.push(
      "Hier zijn de woorden waarop ik luister:<br>" +
      "<ul>" +
      "<li>devine</li>" +
      "<li>geen geluid, zacht geluid, werkt niet, doet het niet</li>" +
      "<li>hk</li>" +
      "<li>probleem</li>" +
      "<li>kabel</li>" +
      "<li>ander</li>" +
      "<li>pioneer xdj-rx2 of xdj-rx2</li>" +
      "<li>allen & heath xone 96 of xone 96</li>" +
      "<li>pioneer ddj 400 of ddj 400</li>" +
      "</ul>" +
      "Gebruik een van deze woorden in je vraag, en ik zal proberen te helpen!"
    );
  }

  if (question.includes("devine")) {
    responses.push("Om je Devine speaker aan te sluiten: \n1. Sluit de draaitafel aan op een versterker met een RCA-kabel. \n2. Verbind de versterker met de speaker via de juiste speakerkabels (let op de plus- en minpolen). \n3. Zet de versterker en draaitafel aan. Je zou nu geluid moeten horen.");
  }

  if (question.includes("geen geluid") || question.includes("zacht geluid") || question.includes("werkt niet") || question.includes("doet het niet")) {
    responses.push("Check of alle kabels goed zijn aangesloten en alles speakers inclusief draaitafel aanstaat\n" +
      "Check of alle kabels werken en pak anders één van de reserve kabels uit de USF krat");
  }

  if (question.includes("hk")) {
    responses.push("Om je HK speaker aan te sluiten: \n1. Sluit de draaitafel aan op een versterker met een RCA-kabel. \n2. Verbind de versterker met je HK speaker via de speakerkabels (let op de juiste polen). \n3. Zet de versterker en draaitafel aan.");
  }

  if (question.includes("probleem")) {
    responses.push("Als je geen geluid hoort, probeer dan de volgende stappen: \n1. Controleer alle kabels en zorg ervoor dat ze goed zijn aangesloten. \n2. Controleer of de versterker aanstaat en het volume niet op mute staat. \n3. Test je draaitafel om te zien of deze goed werkt.");
  }

  if (question.includes("kabel")) {
    responses.push("Voor de aansluiting heb je de volgende kabels nodig: \n1. RCA-kabels om je draaitafel op de versterker aan te sluiten. \n2. Speakerkabels om de versterker met je speakers te verbinden. \nLet erop dat je de juiste polen gebruikt voor positieve en negatieve verbindingen.");
  }

  if (question.includes("ander")) {
    responses.push("Heb je specifieke vragen over een bepaald model draaitafel of speaker? Ik kan je ook helpen met kabels en meer!");
  }

  if (question.includes("pioneer xdj-rx2") || question.includes("xdj-rx2")) {
    responses.push("Stappenplan\n" +
      "Controleer de aansluitingen op de XDJ-RX2\n" +
      "De XDJ-RX2 heeft meerdere uitgangen:\n" +
      "XLR (Master Out 1): Voor professionele actieve speakers.\n" +
      "RCA (Master Out 2): Voor versterkers of direct naar passieve speakers.\n" +
      "Booth Out (6.3 mm jack): Voor monitor speakers.\n" +
      "Verbind de XDJ-RX2 met de speakers\n" +
      "Actieve speakers (met XLR):\n" +
      "\n" +
      "Gebruik een XLR-kabel.\n" +
      "Sluit het ene uiteinde van de XLR-kabel aan op de Master Out 1 (links en rechts) van de XDJ-RX2.\n" +
      "Sluit het andere uiteinde aan op de input van de actieve speakers.\n" +
      "Zorg ervoor dat de volumeknoppen op de speakers laag staan voordat je ze aanzet.\n" +
      "Actieve speakers (met RCA):\n" +
      "\n" +
      "Gebruik een RCA-kabel.\n" +
      "Verbind de Master Out 2 van de XDJ-RX2 met de RCA-inputs van de speakers.\n" +
      "Zorg ervoor dat de volumeknoppen op de speakers laag staan voordat je ze aanzet.\n" +
      "Passieve speakers (via versterker):\n" +
      "\n" +
      "Gebruik een RCA-kabel.\n" +
      "Verbind de Master Out 2 van de XDJ-RX2 met de input van de versterker.\n" +
      "Verbind de versterker met de passieve speakers.\n" +
      "Zet het volume van de versterker laag voordat je het systeem aanzet.\n" +
      "Stroom en opstarten\n" +
      "Sluit de XDJ-RX2 en de speakers aan op een stopcontact.\n" +
      "Zet eerst de XDJ-RX2 aan, daarna de speakers.\n" +
      "Begin met een laag volume en pas de output aan met de volumeknoppen op de XDJ-RX2 (Master Level).\n" +
      "Test het geluid\n" +
      "Speel een track af en controleer of beide speakers goed werken.\n" +
      "Pas indien nodig de EQ en volume-instellingen aan op de XDJ-RX2.");
  }

  if (question.includes("allen & heath xone 96") || question.includes("xone 96")) {
    responses.push("Stappenplan\n" +
      "Controleer je speakers\n" +
      "Actieve speakers: Hebben een ingebouwde versterker en kunnen direct op de Xone:96 worden aangesloten.\n" +
      "Passieve speakers: Hebben een externe versterker nodig die tussen de Xone:96 en de speakers wordt geplaatst.\n" +
      "Verbind de Xone:96 met je speakers\n" +
      "Voor actieve speakers:\n" +
      "\n" +
      "Gebruik XLR-kabels.\n" +
      "Sluit het ene uiteinde van de XLR-kabels aan op de Master Out 1 (links en rechts) van de Xone:96.\n" +
      "Sluit het andere uiteinde aan op de input van de actieve speakers.\n" +
      "Zet de volumeknoppen op de speakers laag voordat je ze inschakelt.\n" +
      "Voor passieve speakers:\n" +
      "\n" +
      "Verbind de Master Out 2 (RCA) van de Xone:96 met de input van de versterker.\n" +
      "Gebruik speakerkabels om de versterker met de passieve speakers te verbinden.\n" +
      "Zet het volume van de versterker laag voordat je het systeem inschakelt.\n" +
      "Voor een DJ-booth monitor:\n" +
      "\n" +
      "Gebruik TRS-kabels.\n" +
      "Verbind de Booth Out (TRS) van de Xone:96 met de monitor speakers.\n" +
      "Stel het booth-volume in met de Booth Level-knop op de Xone:96.\n" +
      "Stroom en opstarten\n" +
      "Sluit de Xone:96 en de speakers aan op stroom.\n" +
      "Zet eerst de Xone:96 aan, daarna de speakers.\n" +
      "Begin met een laag volume en pas de output aan met de Master Level en andere volumeregelaars op de Xone:96.\n" +
      "Test het geluid\n" +
      "Speel een track af vanaf een aangesloten apparaat (bijvoorbeeld een draaitafel of laptop).\n" +
      "Controleer of het geluid correct uit de speakers komt.\n" +
      "Pas indien nodig de EQ en het volume aan voor een optimale luisterervaring.");
  }

  if (question.includes("pioneer ddj 400") || question.includes("ddj 400")) {
    responses.push("Stappen\n" +
      "Controleer de aansluitingen op de DDJ-400\n" +
      "De DDJ-400 heeft een RCA Master Output aan de achterkant. Deze gebruik je om de controller op speakers of een versterker aan te sluiten.\n" +
      "Verbind de DDJ-400 met de speakers\n" +
      "Voor actieve speakers:\n" +
      "\n" +
      "Gebruik een RCA-kabel.\n" +
      "Sluit de witte en rode uiteinden van de RCA-kabel aan op de Master Output van de DDJ-400.\n" +
      "Verbind het andere uiteinde van de kabel met de RCA-inputs op de actieve speakers.\n" +
      "Zet het volume van de speakers laag voordat je ze inschakelt.\n" +
      "Voor passieve speakers:\n" +
      "\n" +
      "Verbind de DDJ-400 met een versterker via de RCA Master Output.\n" +
      "Gebruik speakerkabels om de versterker te verbinden met de passieve speakers.\n" +
      "Zet zowel de versterker als de speakers op laag volume voordat je ze inschakelt.\n" +
      "Voor desktop- of kleine speakers (met 3,5 mm aux):\n" +
      "\n" +
      "Gebruik een RCA-naar-3,5 mm jack-kabel.\n" +
      "Verbind de RCA-uitgang van de DDJ-400 met de 3,5 mm aux-ingang op de speakers.\n" +
      "Zet het volume van de speakers laag voordat je ze inschakelt.\n" +
      "Stroom en instellingen\n" +
      "Zorg ervoor dat zowel de DDJ-400 als de speakers zijn aangesloten op een stopcontact (indien nodig).\n" +
      "Start je laptop of computer en open Rekordbox.\n" +
      "Zet de DDJ-400 en de speakers aan.\n" +
      "Geluid testen\n" +
      "Laad een track in Rekordbox en speel deze af.\n" +
      "Pas het volume aan via de Master Level knop op de DDJ-400.\n" +
      "Controleer of het geluid goed uit de speakers komt en of het volume in balans is.");
  }





  if (responses.length > 0) {
    responses.forEach(response => addMessage(response, false));
  } else {
    addMessage("Sorry, ik begrijp je vraag niet. Probeer het opnieuw.", false);
  }
}

window.onload = startChat;
