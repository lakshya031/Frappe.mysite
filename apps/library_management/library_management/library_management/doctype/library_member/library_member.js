// Copyright (c) 2024, Lakshya Sharma and contributors
// For license information, please see license.txt


frappe.ui.form.on('Library Member', {
    refresh: function(frm) {
        frm.add_custom_button('Create Membership', () => {
            frappe.route_options = {
                'library_member': frm.doc.name
            };
            frappe.new_doc('Library Membership');
        });

        frm.add_custom_button('Create Transaction', () => {
            frappe.route_options = {
                'library_member': frm.doc.name
            };
            frappe.new_doc('Library Transaction');
        });
    }
});

   
