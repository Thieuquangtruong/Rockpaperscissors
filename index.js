// Lấy các phần tử cần thiết từ HTML
const btnKeo = document.querySelector('.btn-keo');
const btnBua = document.querySelector('.btn-bua');
const btnBao = document.querySelector('.btn-bao');
const computerSquare = document.querySelector('#square');
const winner = document.querySelector('.winner');

// Tạo một hàm để chọn ngẫu nhiên giá trị của máy tính
function computerChoice() {
  const choices = ['keo', 'bua', 'bao'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Tạo một hàm để xử lý lựa chọn của người chơi và máy tính
function play(playerChoice) {
  const computerChoiceValue = computerChoice();

  // Hiển thị lựa chọn của máy tính
  computerSquare.textContent = `computer: ${computerChoiceValue}`;

  // So sánh lựa chọn của người chơi và máy tính để xác định người chiến thắng
  if (playerChoice === computerChoiceValue) {
    winner.textContent = 'Hòa';
  } else if (
    (playerChoice === 'keo' && computerChoiceValue === 'bao') ||
    (playerChoice === 'bua' && computerChoiceValue === 'keo') ||
    (playerChoice === 'bao' && computerChoiceValue === 'bua')
  ) {
    winner.textContent = 'Người chơi thắng';
  } else {
    winner.textContent = 'Máy tính thắng';
  }
}

// Thêm sự kiện click vào các nút "Kéo", "Búa" và "Bao"

btnKeo.addEventListener('click', function() {
    play('keo');
  });
btnBua.addEventListener('click', function() {
  play('bua');
});

btnBao.addEventListener('click', function() {
  play('bao');
});

