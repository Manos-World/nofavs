from .models import Show 
from .serializers import ShowSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

class RetrieveShows(APIView):
    def get(self,request):
        try: 
            shows = Show.objects.all()

            shows = ShowSerializer(shows, many = True)

            return Response(shows.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)