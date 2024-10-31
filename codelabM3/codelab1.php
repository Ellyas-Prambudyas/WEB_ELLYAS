<?php
$tinggi = 5; // Tinggi segitiga

for ($i = 1; $i <= $tinggi; $i++) {
    // Menambahkan spasi sebelum bintang
    for ($j = $tinggi - $i; $j > 0; $j--) {
        echo "&nbsp;&nbsp;";
    }

    // Menambahkan bintang pada tiap baris
    for ($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "* ";
    }

    echo "<br>";
}
?>
