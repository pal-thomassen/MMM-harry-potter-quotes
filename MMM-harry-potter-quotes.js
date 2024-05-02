Module.register("MMM-harry-potter-quotes", {
  defaults: {
    size: "small",
    runAtHour: undefined,
  },
  start: function () {
    this.runAtTime(this.config.runAtHour);
  },
  getScripts: function () {
    return ["quotes.js"];
  },
  getStyles: function () {
    return ["harry-potter-quotes.css"];
  },
  getDom: async function () {
    Log.info("Updating DOM");
    const quote = await this.fetchQuote();

    const element = document.createElement("div");
    const sizeClass = this.parseSize(this.config.size);
    element.className = `harry-potter-quotes ${sizeClass}`;

    const quoteElement = document.createElement("p");
    quoteElement.innerHTML = quote.quote || "";
    quoteElement.id = "quoteText";

    const authorElement = document.createElement("p");
    authorElement.innerHTML = quote.speaker || "";
    authorElement.id = "quoteAuthor";

    const storyElement = document.createElement("p");
    storyElement.innerHTML = quote.story || "";
    storyElement.id = "quoteStory";

    element.appendChild(quoteElement);
    element.appendChild(authorElement);
    element.appendChild(storyElement);

    return element;
  },
  runAtTime: function (targetHour) {
    const now = new Date();
    const delay = this.calculateRunningTime(now, targetHour);
    Log.info(`Setting delay for harry potter quotes to be ${delay}`);
    setTimeout(() => {
      this.updateDom();
      this.runAtTime(targetHour);
    }, delay);
  },

  calculateRunningTime: function (now, targetHour) {
    const targetHourInt = parseInt(targetHour);

    if (targetHourInt < 0 || targetHourInt > 23) {
      throw new Error("targetHour must be between 0 and 23");
    }
    const targetTime = new Date(now);
    targetTime.setHours(targetHourInt, 0, 0, 0); // Setting the target time for today

    // If the target time is in the past (today), set it for tomorrow
    if (now > targetTime) {
      targetTime.setDate(targetTime.getDate() + 1);
    }

    return targetTime - now;
  },
  parseSize: function (size) {
    switch (size) {
      case "xsmall":
        return "xsmall";
      case "small":
        return "small";
      case "medium":
        return "medium";
      case "large":
        return "large";
      case "xlarge":
        return "xlarge";
      default:
        return "medium";
    }
  },
  fetchQuote: async function () {
    try {
      let randomIndex = Math.floor(Math.random() * harryPotterQuotes.length);
      return harryPotterQuotes[randomIndex];
    } catch (error) {
      console.error("Fetch error:", error);
    }
  },
});
