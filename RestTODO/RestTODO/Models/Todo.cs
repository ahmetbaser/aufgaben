using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RestTODO.Models
{
    public class Todo
    {
        [Key]
        public int ID { get; set; }

        [Required, MaxLength(100)]
        public String Text { get; set; }

        public DateTime Datum { get; set; }

        public bool Done { get; set; }

    }
}
