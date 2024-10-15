const ctx = document.getElementById('teamPerformanceChart').getContext('2d');

const data = {
    labels: ['Winter', 'Spring', 'Summer', 'Autumn'], // Label musim
    datasets: [
        {
            label: 'Dev team',
            data: [45, 60, 87, 30], // Data persentase tim Dev
            borderColor: 'rgba(0, 0, 0, 1)',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            fill: false,
            tension: 0.4,
            pointBackgroundColor: 'rgba(0, 0, 0, 1)',
            pointRadius: 5
        },
        {
            label: 'Design team',
            data: [25, 50, 70, 20], // Data persentase tim Desain
            borderColor: 'rgba(186, 104, 200, 1)',
            backgroundColor: 'rgba(186, 104, 200, 0.3)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: 'rgba(186, 104, 200, 1)',
            pointRadius: 5
        }
    ]
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                usePointStyle: true,
                pointStyleWidth: 10
            }
        },
        tooltip: {
            callbacks: {
                label: function(tooltipItem) {
                    return tooltipItem.raw + '%';
                }
            }
        }
    },
    scales: {
        x: {
            grid: {
                display: false
            }
        },
        y: {
            ticks: {
                beginAtZero: true,
                callback: function(value) {
                    return value + '%';
                }
            },
            max: 100,
            grid: {
                drawBorder: false
            }
        }
    }
};

// Inisialisasi chart
new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});
