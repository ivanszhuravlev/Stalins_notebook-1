using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Web.Mvc;


namespace Stalins_notebook.Models
{
    [DisplayName("Контакт")]
    public class Contact
    {
        [HiddenInput(DisplayValue = false)]
        public int ContactId { get; set; }

        [DisplayName("Имя")]
        [DataType(DataType.Text)]
       // [Required(ErrorMessage = "Пожалуйта, введите имя")]
       // [StringLength(50, MinimumLength = 1, ErrorMessage = "Длина строки должна быть от 1 до 50 символов")]
        public string FirstName { get; set; }

        [DisplayName("Фамилия")]
        [DataType(DataType.Text)]
       // [Required(ErrorMessage = "Пожалуйта, введите фамилию")]
        //[StringLength(50, MinimumLength = 1, ErrorMessage = "Длина строки должна быть от 1 до 50 символов")]
        public string LastName { get; set; }

        [DisplayName("Отчество")]
        [DataType(DataType.Text)]
        //[Required(ErrorMessage = "Пожалуйта, введите отчество")]
        //[StringLength(50, MinimumLength = 1, ErrorMessage = "Длина строки должна быть от 1 до 50 символов")]
        public string MiddleName { get; set; }

        [DisplayName("Пол")]
        [DataType(DataType.Text)]
        // [Required(ErrorMessage = "Пожалуйта, выберети пол")]
        public string Gender { get; set; }
        [DisplayName("Дата рождения")]
        [DataType(DataType.Date)]
        //  [Required(ErrorMessage = "Пожалуйта, введите дату рождения")]
        public DateTimeOffset? BirthDate { get; set; }

        [DisplayName("E-mail")]
        [DataType(DataType.EmailAddress)]
        [UIHint("EmailAddress")]
       // [Required(ErrorMessage = "Пожалуйта, введите E-mail")]
        //[RegularExpression(@"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}", ErrorMessage = "Некорректный адрес")]
        public string Email { get; set; }

        [DisplayName("Телефон 1")]
        [DataType(DataType.PhoneNumber)]
        //  [Required(ErrorMessage = "Пожалуйта, введите телефон")]
        public int? Telephone1 { get; set; }
        [DisplayName("Телефон 2")]
        [DataType(DataType.PhoneNumber)]
        //  [Required(ErrorMessage = "Пожалуйта, введите телефон")]
        public int? Telephone2 { get; set; }

        [DataType(DataType.Url)]
        [DisplayName("Skype")]
        //  [Required(ErrorMessage = "Пожалуйта, введите логин в Skype")]
        public string Skype { get; set; }
        [DataType(DataType.Url)]
        [DisplayName("Facebook")]
        //  [Required(ErrorMessage = "Пожалуйта, введите логин в Facebook")]
        public string Facebook { get; set; }
        [DataType(DataType.Url)]
        [DisplayName("Twitter")]
        //  [Required(ErrorMessage = "Пожалуйта, введите логин в Twitter")]
        public string Twitter { get; set; }
        [DataType(DataType.Url)]
        [DisplayName("Вконтакте")]
        //  [Required(ErrorMessage = "Пожалуйта, введите логин в VK")]
        public string VK { get; set; }

        [DisplayName("Город")]
        [DataType(DataType.Text)]
        //  [Required(ErrorMessage = "Пожалуйта, введите город")]
        public string City { get; set; }

        [DisplayName("Улица с номером дома и квартиры")]
        [DataType(DataType.Text)]
        //   [Required(ErrorMessage = "Пожалуйта, введите филиал предприятия")]
        public string AddressLine { get; set; }

        [DisplayName("Место работы")]
        [DataType(DataType.Text)]
        //    [Required(ErrorMessage = "Пожалуйта, введите место работы")]
        public string Job { get; set; }
        [DisplayName("Линейный руководитель")]
        //    [Required(ErrorMessage = "Пожалуйта, введите линейного руководителя")]
        public int? ManagerID { get; set; }
        [DisplayName("Должность")]
        [DataType(DataType.Text)]
        //  [Required(ErrorMessage = "Пожалуйта, введите должность")]
        public string Position { get; set; }


        public byte[] ImageData { get; set; } //массив битов для картинки

        [HiddenInput(DisplayValue = false)]
        public string ImageMimeType { get; set; } //тип картинки

        [DisplayName("Заметка")]
        // [Required(ErrorMessage = "Please enter a description")]
        [DataType(DataType.Text)]
        public string Note { get; set; }

        [DisplayName("Описание")]
        // [Required(ErrorMessage = "Please enter a description")]
        [DataType(DataType.MultilineText)]
        public string Description { get; set; }

        // public int rowguid { get; set; }
        [DisplayName("Последнее обновление")]
        [DataType(DataType.Date)]
        //   [Required(ErrorMessage = "Пожалуйта, уточните время создания/изменения контакта")]
        public DateTime? ModifiedDate { get; set; }
    }

   

}