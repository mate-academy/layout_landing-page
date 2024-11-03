#include <stdio.h>

int main() {
    int numerator, denominator, a, b, temp;
    printf("Введіть чисельник: ");
    scanf_s("%d", &numerator);

    printf("Введіть знаменник: ");
    scanf_s("%d", &denominator);

    if (denominator == 0) {
        printf("Помилка: знаменник не може бути нулем.\n");
        return 1;
    }
    a = numerator;
    b = denominator;

    while (b != 0) {
        temp = b;
        b = a % b;
        a = temp;
    }

  
    numerator /= a;
    denominator /= a;

 
    printf("Скорочений дріб: %d/%d\n", numerator, denominator);

    return 0;
}


/*
#include <stdio.h>
#include <math.h>

int main() {
    double A, B, step, x;
    int terms;


    scanf_s("%lf", &A);
    scanf_s("%lf", &B);
    scanf_s("%d", &terms);
    scanf_s("%lf", &step);

    printf("\nТабуляція функції на відрізку [%lf, %lf] з кроком %lf\n", A, B, step);
    printf("--------------------------------------------------------\n");
    printf("|    x    |  Taylor        |   Exact Value  |  Pohybka   |\n");
    printf("--------------------------------------------------------\n");

    for (x = A; x <= B; x += step) {
        if (fabs(x) < 1) {
            double taylor_sum = 0;
            for (int i = 1; i <= terms; i++) {
                taylor_sum += i * pow(x, i - 1);
            }

            double exact_value = 1 / pow(1 - x, 2);

            // Обчислення похибки
            double error = fabs(taylor_sum - exact_value);

            printf("| %7.3lf | %14.6lf | %14.6lf | %8.6lf |\n", x, taylor_sum, exact_value, error);
        }
        else {
            printf("| %7.3lf |     Невизначено    |\n", x);
        }
    }

    printf("--------------------------------------------------------\n");

    return 0;
}
*/