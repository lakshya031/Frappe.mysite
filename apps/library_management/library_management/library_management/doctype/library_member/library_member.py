# Copyright (c) 2024, Lakshya Sharma and contributors
# For license information, please see license.txt
from frappe.model.document import Document

class LibraryMember(Document):
    # This method will run every time a document is saved
    def before_save(self):
        self.full_name = f'{self.first_name} {self.last_name or ""}'


