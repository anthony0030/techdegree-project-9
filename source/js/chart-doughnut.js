new Chart(document.getElementById("chart-doughnut"), {
  type: "doughnut",
  data: {
    labels: [
      "Desctops",
      "Tablets",
      "Phone",
     ],
    datasets: [{
      borderWidth: 0,
      hoverBorderWidth: 2,
      data: [
        70,
        15,
        15,
      ],
      backgroundColor: [
        "#7377BD",
        "#82C890",
        "#75B0BE",
        ],
    }]
  },
  options: {
    rotation: 0.06,
    legend: {
      labels: {
          boxWidth: 13,
          padding: 40,
      },
        position: "right",
        reverse: true,
        display: true,
      }
    }
});