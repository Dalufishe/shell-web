@echo off

:: ��ܷ�e�ؿ����ɮײM�� (dir)
echo.
echo ��ܷ�e�ؿ����ɮײM�� (dir):
dir

:: ��ܺ���������T (ipconfig)
echo ��ܺ���������T (ipconfig):
ipconfig

:: �إߤ@�ӷs���ɮרüg�J���e
set fileName=newfile.js
echo.
echo �إ��ɮרüg�J���e:
echo const hello = 'JavaScript' > %fileName%
echo �ɮ� %fileName% �w�g�إߨüg�J���e�I
