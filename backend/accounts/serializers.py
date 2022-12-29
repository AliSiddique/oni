from rest_framework import serializers
from .models import UserProfile
from dj_rest_auth.serializers import UserDetailsSerializer

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('want_location',)



class UserSerializer(UserDetailsSerializer):
    profile = UserProfileSerializer()
    class Meta(UserDetailsSerializer.Meta):
        fields = UserDetailsSerializer.Meta.fields + ('profile',)