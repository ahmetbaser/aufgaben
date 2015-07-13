using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KnockoutJsDemo.Models
{
    public class Book
    {
        [Key]
        public int ID { get; set; }

        [Required, MaxLength(100)]
        public String Title { get; set; }
        [Required, MaxLength(100)]
        public String Author { get; set; }

    }
}
