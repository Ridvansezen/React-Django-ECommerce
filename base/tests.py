from django.test import TestCase
from base.models import MyModel

class MyModelTestCase(TestCase):
    def test_model_creation(self):
        obj = MyModel.objects.create(name="Test Object")
        self.assertEqual(obj.name, "Test Object")
