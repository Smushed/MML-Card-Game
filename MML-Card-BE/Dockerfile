#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["MML-Card-BE/MML-Card-BE.csproj", "MML-Card-BE/"]
RUN dotnet restore "MML-Card-BE/MML-Card-BE.csproj"
COPY . .
WORKDIR "/src/MML-Card-BE"
RUN dotnet build "MML-Card-BE.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MML-Card-BE.csproj" -c Release -o /app/publish /p:UseAppHost=false

EXPOSE 4040
ENV ASPNETCORE_URLS=http://*:4040

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MML-Card-BE.dll"]