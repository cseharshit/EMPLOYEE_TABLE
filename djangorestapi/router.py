from rest_framework import routers
from employee.viewsets import EmployeeViewset

router=routers.DefaultRouter()
router.register('employee',EmployeeViewset)