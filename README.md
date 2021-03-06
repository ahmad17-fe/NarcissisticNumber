# Does my number look big in this?

A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

# Penjelasan Singkat

Sebagai contoh: bilangan 153. Karakter angka bilangan ratusan atau digit tiga tersebut berturut-turut adalah 1, 5, dan 3. Bila tiap karakter dikuadratkan sesuai digitnya, alias dikuadratkan dengan angka tiga, kemudian ketiga kuadrat tersebut dijumlahkan, hasilnya akan sama dengan 153. Bila dinyatakan dalam persamaan matematika: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153. Contoh lain adalah angka empat digit 1634, dalam persamaan matematika: 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634.

referensi: https://digstraksi.com/perburuan-angka-narsistik/
