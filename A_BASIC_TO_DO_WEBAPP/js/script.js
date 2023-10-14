function getCurrentDateTime() {
    var now = new Date();
    var options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return now.toLocaleDateString("en-US", options);
  }

  document
    .getElementById("add-task-btn")
    .addEventListener("click", function () {
      var titleInput = document.getElementById("task-title");
      var descriptionInput = document.getElementById("task-description");

      var title = titleInput.value.trim();
      var description = descriptionInput.value.trim();

      if (title !== "" && description !== "") {
        var listItem = document.createElement("li");

        var titleElement = document.createElement("h3");
        titleElement.innerHTML = title;
        listItem.appendChild(titleElement);

        var descriptionElement = document.createElement("p");
        descriptionElement.innerHTML = description;
        listItem.appendChild(descriptionElement);

        var timestampElement = document.createElement("p");
        timestampElement.classList.add("timestamp");
        timestampElement.innerHTML = "Added: " + getCurrentDateTime();
        listItem.appendChild(timestampElement);

        listItem.innerHTML += ' <button class="delete">Delete</button>';
        listItem.innerHTML += ' <button class="complete">Complete</button>';

        var pendingList = document.getElementById("pending-list");
        pendingList.appendChild(listItem);

        titleInput.value = "";
        descriptionInput.value = "";
      }
    });

  document.addEventListener("click", function (event) {
    if (event.target.matches(".delete")) {
      var listItem = event.target.parentNode;
      listItem.parentNode.removeChild(listItem);
    }
    if (event.target.matches(".complete")) {
      var listItem = event.target.parentNode;
      listItem.classList.add("completed");

      var timestampElement = document.createElement("p");
      timestampElement.classList.add("timestamp");
      timestampElement.innerHTML = "Completed: " + getCurrentDateTime();
      listItem.appendChild(timestampElement);

      listItem.removeChild(event.target);

      var completedList = document.getElementById("completed-list");
      completedList.appendChild(listItem);
    }
  });