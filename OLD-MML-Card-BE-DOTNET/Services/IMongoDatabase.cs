﻿//using MongoDB.Driver.Linq;
//using MongoDB.Driver;
//using System.Linq.Expressions;

//namespace MML_Card_BE.Services
//{
//    public interface IDatabase<T> where T : class, new()
//    {
//        IMongoQueryable<T> Query { get; set; }

//        T GetOne(Expression<Func<T, bool>> expression);

//        T FindOneAndUpdate(Expression<Func<T, bool>> expression, UpdateDefinition<T> update, FindOneAndUpdateOptions<T> option);

//        void UpdateOne(Expression<Func<T, bool>> expression, UpdateDefinition<T> update);

//        void DeleteOne(Expression<Func<T, bool>> expression);

//        void InsertMany(IEnumerable<T> items);

//        void InsertOne(T item);
//    }
//}

