using MML_Card_BE.Models.Card.Creature;
using MML_Card_BE.Services;
using MML_Card_BE.Services.CardServices;
using MML_Card_BE.Services.Settings;


//The Port for the app is under Containers > Ports at the bottom of the window

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.Configure<DatabaseSettings>(
    builder.Configuration.GetSection("DatabaseSettings"));

builder.Services.AddSingleton<HeroService>();
builder.Services.AddSingleton<MonsterService>();
builder.Services.AddSingleton<BarricadeService>();
builder.Services.AddSingleton<BattlefieldService>();
builder.Services.AddSingleton<EquipmentService>();
builder.Services.AddSingleton<EventService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
