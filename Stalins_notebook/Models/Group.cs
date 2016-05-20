using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Stalins_notebook.Models
{
    [DisplayName("Группа")]
    public class Group
    {
        // [HiddenInput(DisplayValue = false)]
        public int GroupId { get; set; }

        [DisplayName("Название")]
        [DataType(DataType.Text)]
        public string Name { get; set; }

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
        public DateTime? ModifiedDate { get; set; }

        //     public IEnumerable<Contact> Contacts { get; set; }
    }
}