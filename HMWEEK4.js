// Fungsi untuk menghasilkan nilai acak antara 1 dan 50
function generateRandomValue() {
    return Math.floor(Math.random() * 50) + 1;
  }
  
  // Fungsi untuk membuat array dengan 100 nilai acak
  function createRandomArray(length) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
      randomArray.push(generateRandomValue());
    }
    return randomArray;
  }
  
  // Fungsi untuk membagi array menjadi dua array: genap dan ganjil
  function splitArrayByIndex(arr) {
    const evenArray = [];
    const oddArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        evenArray.push(arr[i]);
      } else {
        oddArray.push(arr[i]);
      }
    }
    return [evenArray, oddArray];
  }
  
  // Fungsi untuk menghitung nilai minimum dalam sebuah array
  function getMinValue(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  // Fungsi untuk menghitung nilai maksimum dalam sebuah array
  function getMaxValue(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  // Fungsi untuk menghitung total nilai dalam sebuah array
  function getTotalValue(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
  // Fungsi untuk menghitung rata-rata dalam sebuah array
  function getAverageValue(arr) {
    const total = getTotalValue(arr);
    return total / arr.length;
  }
  
  // Fungsi untuk membandingkan dua nilai
  function compareValues(value1, value2) {
    if (value1 < value2) {
      return "Array ganjil lebih besar";
    } else if (value1 > value2) {
      return "Array ganjil lebih kecil";
    } else {
      return "sama";
    }
  }
  
  // Membuat array dengan 100 nilai acak
  const randomArray = createRandomArray(100);
  
  // Memecah array menjadi dua array: genap dan ganjil
  const [evenArray, oddArray] = splitArrayByIndex(randomArray);
  
  // Menghitung Min, Max, Total, dan Rata-rata untuk array genap dan ganjil
  const minGenap = getMinValue(evenArray);
  const maxGenap = getMaxValue(evenArray);
  const totalGenap = getTotalValue(evenArray);
  const rataRataGenap = getAverageValue(evenArray);
  
  const minGanjil = getMinValue(oddArray);
  const maxGanjil = getMaxValue(oddArray);
  const totalGanjil = getTotalValue(oddArray);
  const rataRataGanjil = getAverageValue(oddArray);
  
  // Menampilkan hasil
  console.log(`Array dengan jumlah index 100: ${randomArray}`);
  console.log(`Array genap dengan jumlah index 50: ${evenArray}`);
  console.log(`Array ganjil dengan jumlah index 50: ${oddArray}`);
  console.log(`Min, Max, Total, Rata-rata pada array genap:`);
  console.log(`- Min: ${minGenap}`);
  console.log(`- Max: ${maxGenap}`);
  console.log(`- Total: ${totalGenap}`);
  console.log(`- Rata-rata: ${rataRataGenap}`);
  console.log(`Min, Max, Total, Rata-rata pada array ganjil:`);
  console.log(`- Min: ${minGanjil}`);
  console.log(`- Max: ${maxGanjil}`);
  console.log(`- Total: ${totalGanjil}`);
  console.log(`- Rata-rata: ${rataRataGanjil}`);
  console.log(`Perbandingan nilai Min: ${compareValues(minGenap, minGanjil)}`);
  console.log(`Perbandingan nilai Max: ${compareValues(maxGenap, maxGanjil)}`);
  console.log(`Perbandingan nilai Total: ${compareValues(totalGenap, totalGanjil)}`);
  console.log(`Perbandingan nilai Rata-rata: ${compareValues(rataRataGenap, rataRataGanjil)}`);
  