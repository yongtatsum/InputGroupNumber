# An advanced number field for Laravel Nova. Inspirited by [simplesquid/nova-advanced-number-field](https://github.com/simplesquid/nova-advanced-number-field) and [decency-be/nova-input-group](https://github.com/decency-be/nova-input-group)


A Laravel Nova field which adds additional functionality to the default Number field by using PHP's `number_format()` function.

![Screenshot of the advanced number field](https://github.com/yongtatsum/InputGroupNumber/raw/master/docs/Screenshot_1.png)
(https://github.com/yongtatsum/InputGroupNumber/raw/master/docs/Screenshot_2.png)
## Installation

You can install this package in a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require sum/input-group-number
```

## Usage

The `AdvancedNumber` field provides an additional 5 methods to the default `Number` field, namely:

- `->prefix('$')`: Sets the prefix to be used when displaying the number.
- `->thousandsSeparator(' ')`: Set the thousands separator symbol to be used when displaying the number.
- `->decimalPoint('.')`: Sets the decimal point symbol to be used when displaying the number.
- `->decimals(3)`: Sets the number of decimal points to be used as well as the step value.
- `->suffix('%')`: Sets the suffix to be used when displaying the number.

You can use the field in your Nova resource like so:

```php
namespace App\Nova;

use Sum\InputGroupNumber\InputGroupNumber;

class User extends Resource
{
    // ...

    public function fields(Request $request)
    {
        return [
            // ...

            InputGroupNumber::make('Price')
                ->prefix('$')
                ->thousandsSeparator(','),

            InputGroupNumber::make('Markup')
                ->decimals(0)
                ->suffix('%')
                ->min(0)->max(100),

            // ...
        ];
    }
}
```


## Credits

- [simplesquid/nova-advanced-number-field](https://github.com/simplesquid/nova-advanced-number-field)
- [decency-be/nova-input-group](https://github.com/decency-be/nova-input-group)

Package skeleton based on [simplesquid/nova-advanced-number-field](https://github.com/simplesquid/nova-advanced-number-field).

## About us

This package just build for fun

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.