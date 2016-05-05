using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Stalins_notebook.Models
{
    public class MembersGroup
    {
        public int MembersGroupId { get; set; }
        public int GroupId { get; set; }
        public int MemberId { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}