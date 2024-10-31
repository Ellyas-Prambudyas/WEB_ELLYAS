<?php
$tinggi = 5; // Tinggi segitiga

for ($i = $tinggi; $i >= 1; $i--) {
    // Menambahkan spasi sebelum bintang
    for ($j = 0; $j < $tinggi - $i; $j++) {
        echo "&nbsp;&nbsp;";
    }

    // Menambahkan bintang pada tiap baris
    for ($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "* ";
    }

    echo "<br>";
}
?>
