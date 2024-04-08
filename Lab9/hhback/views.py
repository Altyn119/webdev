from django.shortcuts import render
from .models import Company, Vacancy
from django.http import JsonResponse

# Create your views here.

def Companies(request):
    companies = Company.objects.all()
    data = {
        'companies' : list(companies.values())
    }
    return JsonResponse(data, status=200)

def getCompany(request, id):
    companies = Company.objects.get(id = id)
    data = {
        'company' : {
            'name' : companies.name,
            'description' : companies.description,
            'city' : companies.city,
            'address' : companies.address
        }
    }
    return JsonResponse(data, status=200)

def Vacancies(request):
    vacancies = Vacancy.objects.all()
    data = {
        'vacancies' : list(vacancies.values())
    }
    return JsonResponse(data, status=200)

def getVacancy(request, id):
    vacancy = Vacancy.objects.get(id = id)
    data = {
        'vacancy' : {
            'name' : vacancy.name,
            'description' : vacancy.description,
            'salary' : vacancy.salary,
            'company_id' : vacancy.company_id
        }
    }
    return JsonResponse(data, status=200)

def topTenSalaries(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    data = {
        'vacancies': list(vacancies.values())
    }
    return JsonResponse(data, status=200)

def getVacancyByCompany(request, id):
    vacancies = Vacancy.objects.filter(company_id=id)
    data = {
        'vacancies': list(vacancies.values())
    }
    return JsonResponse(data, status=200)