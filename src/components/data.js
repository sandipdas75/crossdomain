import { useState, useEffect, useRef, useMemo } from 'react';

const getMeh =() =>{
return ["abc","fhfhf"]
}
export const data1 = getMeh();


export const data = [
    {
        "ActivityId":"ba9fe4a0-ee20-ec11-b6e7-000d3ad67f6c",
        "ActivityName":"Rosy",
        "Description":"Rosy",
        "StartDate":"2020-01-16T00:00:00",
        "CreatedOn":"0001-01-01T00:00:00",
        "Hours":10.0000000000,
        "ActivityClassification":"Formal",
        "ActivityClassificationCode":200000001,
        "ActivityStatus":"Completed",
        "ActivityStatusCode":200000000,
        "ActivityType":"Other",
        "ActivityTypeCode":200000005,
        "IsEthical":false
     },
     {
        "ActivityId":"8171dc9d-e883-eb11-a812-000d3ad48f92",
        "ActivityName":"Late Logging of Activity",
        "Description":"Late!",
        "StartDate":"2020-03-10T00:00:00",
        "CreatedOn":"2021-03-12T00:00:00",
        "Hours":12.0000000000,
        "ActivityClassification":"Informal",
        "ActivityClassificationCode":200000000,
        "ActivityStatus":"Completed",
        "ActivityStatusCode":200000000,
        "ActivityType":"Online/Distance Learning",
        "ActivityTypeCode":200000003,
        "IsEthical":true
     },
     {
        "ActivityId":"ce89e07c-ee20-ec11-b6e7-000d3ad67f6c",
        "ActivityName":"Nayan",
        "Description":"Nayan Test",
        "StartDate":"2020-09-03T00:00:00",
        "CreatedOn":"0001-01-01T00:00:00",
        "Hours":12.0000000000,
        "ActivityClassification":"Formal",
        "ActivityClassificationCode":200000001,
        "ActivityStatus":"Planned",
        "ActivityStatusCode":1,
        "ActivityType":"Other",
        "ActivityTypeCode":200000005,
        "IsEthical":false
     },
     {
        "ActivityId":"bd848764-f921-ec11-b6e6-002248436878",
        "ActivityName":"Testing",
        "Description":"Activity Description",
        "StartDate":"2020-09-10T00:00:00",
        "CreatedOn":"0001-01-01T00:00:00",
        "Hours":10.0000000000,
        "ActivityClassification":"Informal",
        "ActivityClassificationCode":200000000,
        "ActivityStatus":"Planned",
        "ActivityStatusCode":1,
        "ActivityType":"Conference/Workshop/Seminar",
        "ActivityTypeCode":200000000,
        "IsEthical":false
     },
     {
        "ActivityId":"42c319c0-f921-ec11-b6e6-002248436878",
        "ActivityName":"Abc",
        "Description":"Sandip Description",
        "StartDate":"2020-09-17T00:00:00",
        "CreatedOn":"0001-01-01T00:00:00",
        "Hours":10.0000000000,
        "ActivityClassification":"Informal",
        "ActivityClassificationCode":200000000,
        "ActivityStatus":"Planned",
        "ActivityStatusCode":1,
        "ActivityType":"Exam Setting/Moderation",
        "ActivityTypeCode":200000001,
        "IsEthical":false
     },
     {
        "ActivityId":"f489eaa0-f921-ec11-b6e6-002248436878",
        "ActivityName":"Raj Test",
        "Description":"Test Description",
        "StartDate":"2020-09-24T00:00:00",
        "CreatedOn":"0001-01-01T00:00:00",
        "Hours":10.0000000000,
        "ActivityClassification":"Informal",
        "ActivityClassificationCode":200000000,
        "ActivityStatus":"Planned",
        "ActivityStatusCode":1,
        "ActivityType":"Mentoring",
        "ActivityTypeCode":200000002,
        "IsEthical":false
     },
     {
        "ActivityId":"51f45539-ef20-ec11-b6e6-000d3ad6782a",
        "ActivityName":"test case nayan",
        "Description":"new data ",
        "StartDate":"2020-10-21T00:00:00",
        "CreatedOn":"0001-01-01T00:00:00",
        "Hours":8.0000000000,
        "ActivityClassification":"Informal",
        "ActivityClassificationCode":200000000,
        "ActivityStatus":"Planned",
        "ActivityStatusCode":1,
        "ActivityType":"Other",
        "ActivityTypeCode":200000005,
        "IsEthical":false
     },
     {
        "ActivityId":"b56a6425-ef20-ec11-b6e6-000d3ad6782a",
        "ActivityName":"Zensar Data",
        "Description":"test data",
        "StartDate":"2020-11-13T00:00:00",
        "CreatedOn":"0001-01-01T00:00:00",
        "Hours":3.0000000000,
        "ActivityClassification":"Informal",
        "ActivityClassificationCode":200000000,
        "ActivityStatus":"Planned",
        "ActivityStatusCode":1,
        "ActivityType":"Other",
        "ActivityTypeCode":200000005,
        "IsEthical":false
     }
  ];
  
  export const listCheckboxesRating = [{
    "ActivityTypeId":"200000000",
    "ActivityTypeName":"Conference/Workshop/Seminar"
 },
 {
    "ActivityTypeId":"200000001",
    "ActivityTypeName":"Exam Setting/Moderation"
 },
 {
    "ActivityTypeId":"200000002",
    "ActivityTypeName":"Mentoring"
 },
 {
    "ActivityTypeId":"200000003",
    "ActivityTypeName":"Online/Distance Learning"
 },
 {
    "ActivityTypeId":"200000004",
    "ActivityTypeName":"On-the-job Training by Internal Expert"
 },
 {
    "ActivityTypeId":"200000005",
    "ActivityTypeName":"Other"
 },
 {
    "ActivityTypeId":"200000006",
    "ActivityTypeName":"Private Study"
 },
 {
    "ActivityTypeId":"200000007",
    "ActivityTypeName":"Teaching/Training Delivered to Others"
 },
 {
    "ActivityTypeId":"200000008",
    "ActivityTypeName":"Technical Authorship"
 },
 {
    "ActivityTypeId":"200000009",
    "ActivityTypeName":"Training Course"
 },
 {
    "ActivityTypeId":"200000010",
    "ActivityTypeName":"Work-based Activity"
 }
  ];
  
//   export const listCheckboxesGenre = [
//     {
//       id: 0,
//       name: 'genre',
//       label: 'Any Genre',
//       value: ''
//     },
//     {
//       id: 1,
//       name: 'action',
//       label: 'Action',
//       value: 'Action'
//     },
//     {
//       id: 2,
//       name: 'comedy',
//       label: 'Comedy',
//       value: 'Comedy'
//     },
//     {
//       id: 3,
//       name: 'drama',
//       label: 'Drama',
//       value: 'Drama'
//     },
//     {
//       id: 4,
//       name: 'thriller',
//       label: 'Thriller',
//       value: 'Thriller'
//     }
//   ];
  