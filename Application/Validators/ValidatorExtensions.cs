using FluentValidation;

namespace Application.Validators
{
    public static class ValidatorExtensions
    {
        public static IRuleBuilder<T, string> Password<T>(this IRuleBuilder<T, string> builder)
        {
            var options = builder
            .NotEmpty()
            .MinimumLength(6).WithMessage("Passsword must at least be 6 characters")
            .Matches("[A-Z]").WithMessage("Password must contain 1 upper case letter")
            .Matches("[a-z]").WithMessage("Password must contain at least 1 lower case letter")
            .Matches("[0-9]").WithMessage("Password must contain 1 number")
            .Matches("[^a-zA-Z0-9]").WithMessage("Password must contain non alphanumeric");

            return options;
        }
    }
}