const MBTA_KEY = ""; // ADD KEY

const url = "https://api-v3.mbta.com/alerts";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    // Comment out fetch call and use data below for testing to prevent getting rate limited
    // const data = {
    //   data: [
    //     {
    //       attributes: {
    //         active_period: [
    //           {
    //             end: null,
    //             start: "2022-03-15T10:13:00-04:00",
    //           },
    //         ],
    //         banner: null,
    //         cause: "MAINTENANCE",
    //         created_at: "2022-03-15T10:13:31-04:00",
    //         description:
    //           "The escalator will remain out of service for the foreseeable future. This decision was made after a thorough inspection determined that corrosion on the escalator’s steel truss was so severe that it could not be repaired further and that a complete replacement of the escalator would be required. Replacing the escalator at this location requires a more extended unit meeting modern escalator safety requirements. This longer unit will require significant alteration to the station entrance to meet code requirements. The MBTA has currently begun design work to understand what station upgrades will be needed. \r\n  \r\nDue to these complexities, we expect the escalator will remain out of service for a significant time. We recognize the challenges this poses to our riders, and please know we are working to identify a solution as quickly as possible. In the meantime, Government Center Station, which is fully accessible and serves the Blue Line, is under a quarter-mile from Bowdoin Station. \r\n",
    //         duration_certainty: "UNKNOWN",
    //         effect: "ESCALATOR_CLOSURE",
    //         header:
    //           "Bowdoin Escalator 125 (Lobby to street) is unavailable until further notice pending replacement. ",
    //         image: null,
    //         image_alternative_text: null,
    //         informed_entity: [
    //           {
    //             stop: "70038",
    //             route_type: 1,
    //             route: "Blue",
    //             activities: ["USING_ESCALATOR"],
    //             facility: "125",
    //           },
    //           {
    //             stop: "70838",
    //             route_type: 1,
    //             route: "Blue",
    //             activities: ["USING_ESCALATOR"],
    //             facility: "125",
    //           },
    //           {
    //             stop: "door-bomnl-main",
    //             route_type: 1,
    //             route: "Blue",
    //             activities: ["USING_ESCALATOR"],
    //             facility: "125",
    //           },
    //           {
    //             stop: "place-bomnl",
    //             route_type: 1,
    //             route: "Blue",
    //             activities: ["USING_ESCALATOR"],
    //             facility: "125",
    //           },
    //         ],
    //         lifecycle: "ONGOING",
    //         service_effect: "Bowdoin escalator unavailable",
    //         severity: 3,
    //         short_header:
    //           "Bowdoin Escalator 125 (Lobby to street) is unavailable until further notice.",
    //         timeframe: "ongoing",
    //         updated_at: "2023-06-13T10:12:06-04:00",
    //         url: null,
    //       },
    //       id: "435698",
    //       links: {
    //         self: "/alerts/435698",
    //       },
    //       type: "alert",
    //     },
    //     {
    //       attributes: {
    //         active_period: [
    //           {
    //             end: "2025-10-05T02:59:00-04:00",
    //             start: "2025-10-04T03:00:00-04:00",
    //           },
    //           {
    //             end: "2025-10-06T02:59:00-04:00",
    //             start: "2025-10-05T03:00:00-04:00",
    //           },
    //           {
    //             end: "2025-10-11T02:59:00-04:00",
    //             start: "2025-10-10T03:00:00-04:00",
    //           },
    //           {
    //             end: "2025-10-12T02:59:00-04:00",
    //             start: "2025-10-11T03:00:00-04:00",
    //           },
    //           {
    //             end: "2025-10-13T02:59:00-04:00",
    //             start: "2025-10-12T03:00:00-04:00",
    //           },
    //           {
    //             end: "2025-10-18T02:59:00-04:00",
    //             start: "2025-10-17T03:00:00-04:00",
    //           },
    //           {
    //             end: "2025-10-19T02:59:00-04:00",
    //             start: "2025-10-18T03:00:00-04:00",
    //           },
    //           {
    //             end: "2025-10-20T02:59:00-04:00",
    //             start: "2025-10-19T03:00:00-04:00",
    //           },
    //           {
    //             end: "2025-10-25T02:59:00-04:00",
    //             start: "2025-10-24T03:00:00-04:00",
    //           },
    //           {
    //             end: "2025-10-26T02:59:00-04:00",
    //             start: "2025-10-25T03:00:00-04:00",
    //           },
    //           {
    //             end: "2025-10-27T02:59:00-04:00",
    //             start: "2025-10-26T03:00:00-04:00",
    //           },
    //           {
    //             end: "2025-11-01T02:59:00-04:00",
    //             start: "2025-10-31T03:00:00-04:00",
    //           },
    //           {
    //             end: "2025-11-02T02:59:00-05:00",
    //             start: "2025-11-01T03:00:00-04:00",
    //           },
    //           {
    //             end: "2025-11-03T02:59:00-05:00",
    //             start: "2025-11-02T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-11-08T02:59:00-05:00",
    //             start: "2025-11-07T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-11-09T02:59:00-05:00",
    //             start: "2025-11-08T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-11-10T02:59:00-05:00",
    //             start: "2025-11-09T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-11-15T02:59:00-05:00",
    //             start: "2025-11-14T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-11-16T02:59:00-05:00",
    //             start: "2025-11-15T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-11-17T02:59:00-05:00",
    //             start: "2025-11-16T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-11-22T02:59:00-05:00",
    //             start: "2025-11-21T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-11-23T02:59:00-05:00",
    //             start: "2025-11-22T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-11-24T02:59:00-05:00",
    //             start: "2025-11-23T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-11-29T02:59:00-05:00",
    //             start: "2025-11-28T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-11-30T02:59:00-05:00",
    //             start: "2025-11-29T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-12-01T02:59:00-05:00",
    //             start: "2025-11-30T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-12-06T02:59:00-05:00",
    //             start: "2025-12-05T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-12-07T02:59:00-05:00",
    //             start: "2025-12-06T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-12-08T02:59:00-05:00",
    //             start: "2025-12-07T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-12-13T02:59:00-05:00",
    //             start: "2025-12-12T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-12-14T02:59:00-05:00",
    //             start: "2025-12-13T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-12-15T02:59:00-05:00",
    //             start: "2025-12-14T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-12-20T02:59:00-05:00",
    //             start: "2025-12-19T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-12-21T02:59:00-05:00",
    //             start: "2025-12-20T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-12-22T02:59:00-05:00",
    //             start: "2025-12-21T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-12-27T02:59:00-05:00",
    //             start: "2025-12-26T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-12-28T02:59:00-05:00",
    //             start: "2025-12-27T03:00:00-05:00",
    //           },
    //           {
    //             end: "2025-12-29T02:59:00-05:00",
    //             start: "2025-12-28T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-01-03T02:59:00-05:00",
    //             start: "2026-01-02T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-01-04T02:59:00-05:00",
    //             start: "2026-01-03T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-01-05T02:59:00-05:00",
    //             start: "2026-01-04T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-01-10T02:59:00-05:00",
    //             start: "2026-01-09T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-01-11T02:59:00-05:00",
    //             start: "2026-01-10T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-01-12T02:59:00-05:00",
    //             start: "2026-01-11T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-01-17T02:59:00-05:00",
    //             start: "2026-01-16T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-01-18T02:59:00-05:00",
    //             start: "2026-01-17T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-01-19T02:59:00-05:00",
    //             start: "2026-01-18T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-01-24T02:59:00-05:00",
    //             start: "2026-01-23T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-01-25T02:59:00-05:00",
    //             start: "2026-01-24T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-01-26T02:59:00-05:00",
    //             start: "2026-01-25T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-01-31T02:59:00-05:00",
    //             start: "2026-01-30T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-02-01T02:59:00-05:00",
    //             start: "2026-01-31T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-02-02T02:59:00-05:00",
    //             start: "2026-02-01T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-02-07T02:59:00-05:00",
    //             start: "2026-02-06T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-02-08T02:59:00-05:00",
    //             start: "2026-02-07T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-02-09T02:59:00-05:00",
    //             start: "2026-02-08T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-02-14T02:59:00-05:00",
    //             start: "2026-02-13T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-02-15T02:59:00-05:00",
    //             start: "2026-02-14T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-02-16T02:59:00-05:00",
    //             start: "2026-02-15T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-02-21T02:59:00-05:00",
    //             start: "2026-02-20T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-02-22T02:59:00-05:00",
    //             start: "2026-02-21T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-02-23T02:59:00-05:00",
    //             start: "2026-02-22T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-02-28T02:59:00-05:00",
    //             start: "2026-02-27T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-03-01T02:59:00-05:00",
    //             start: "2026-02-28T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-03-02T02:59:00-05:00",
    //             start: "2026-03-01T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-03-07T02:59:00-05:00",
    //             start: "2026-03-06T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-03-08T03:59:00-04:00",
    //             start: "2026-03-07T03:00:00-05:00",
    //           },
    //           {
    //             end: "2026-03-09T02:59:00-04:00",
    //             start: "2026-03-08T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-03-14T02:59:00-04:00",
    //             start: "2026-03-13T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-03-15T02:59:00-04:00",
    //             start: "2026-03-14T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-03-16T02:59:00-04:00",
    //             start: "2026-03-15T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-03-21T02:59:00-04:00",
    //             start: "2026-03-20T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-03-22T02:59:00-04:00",
    //             start: "2026-03-21T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-03-23T02:59:00-04:00",
    //             start: "2026-03-22T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-03-28T02:59:00-04:00",
    //             start: "2026-03-27T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-03-29T02:59:00-04:00",
    //             start: "2026-03-28T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-03-30T02:59:00-04:00",
    //             start: "2026-03-29T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-04-04T02:59:00-04:00",
    //             start: "2026-04-03T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-04-05T02:59:00-04:00",
    //             start: "2026-04-04T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-04-06T02:59:00-04:00",
    //             start: "2026-04-05T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-04-11T02:59:00-04:00",
    //             start: "2026-04-10T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-04-12T02:59:00-04:00",
    //             start: "2026-04-11T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-04-13T02:59:00-04:00",
    //             start: "2026-04-12T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-04-18T02:59:00-04:00",
    //             start: "2026-04-17T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-04-19T02:59:00-04:00",
    //             start: "2026-04-18T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-04-20T02:59:00-04:00",
    //             start: "2026-04-19T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-04-25T02:59:00-04:00",
    //             start: "2026-04-24T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-04-26T02:59:00-04:00",
    //             start: "2026-04-25T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-04-27T02:59:00-04:00",
    //             start: "2026-04-26T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-05-02T02:59:00-04:00",
    //             start: "2026-05-01T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-05-03T02:59:00-04:00",
    //             start: "2026-05-02T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-05-04T02:59:00-04:00",
    //             start: "2026-05-03T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-05-09T02:59:00-04:00",
    //             start: "2026-05-08T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-05-10T02:59:00-04:00",
    //             start: "2026-05-09T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-05-11T02:59:00-04:00",
    //             start: "2026-05-10T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-05-16T02:59:00-04:00",
    //             start: "2026-05-15T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-05-17T02:59:00-04:00",
    //             start: "2026-05-16T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-05-18T02:59:00-04:00",
    //             start: "2026-05-17T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-05-23T02:59:00-04:00",
    //             start: "2026-05-22T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-05-24T02:59:00-04:00",
    //             start: "2026-05-23T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-05-25T02:59:00-04:00",
    //             start: "2026-05-24T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-05-30T02:59:00-04:00",
    //             start: "2026-05-29T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-05-31T02:59:00-04:00",
    //             start: "2026-05-30T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-06-01T02:59:00-04:00",
    //             start: "2026-05-31T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-06-06T02:59:00-04:00",
    //             start: "2026-06-05T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-06-07T02:59:00-04:00",
    //             start: "2026-06-06T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-06-08T02:59:00-04:00",
    //             start: "2026-06-07T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-06-13T02:59:00-04:00",
    //             start: "2026-06-12T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-06-14T02:59:00-04:00",
    //             start: "2026-06-13T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-06-15T02:59:00-04:00",
    //             start: "2026-06-14T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-06-20T02:59:00-04:00",
    //             start: "2026-06-19T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-06-21T02:59:00-04:00",
    //             start: "2026-06-20T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-06-22T02:59:00-04:00",
    //             start: "2026-06-21T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-06-27T02:59:00-04:00",
    //             start: "2026-06-26T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-06-28T02:59:00-04:00",
    //             start: "2026-06-27T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-06-29T02:59:00-04:00",
    //             start: "2026-06-28T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-07-04T02:59:00-04:00",
    //             start: "2026-07-03T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-07-05T02:59:00-04:00",
    //             start: "2026-07-04T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-07-06T02:59:00-04:00",
    //             start: "2026-07-05T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-07-11T02:59:00-04:00",
    //             start: "2026-07-10T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-07-12T02:59:00-04:00",
    //             start: "2026-07-11T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-07-13T02:59:00-04:00",
    //             start: "2026-07-12T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-07-18T02:59:00-04:00",
    //             start: "2026-07-17T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-07-19T02:59:00-04:00",
    //             start: "2026-07-18T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-07-20T02:59:00-04:00",
    //             start: "2026-07-19T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-07-25T02:59:00-04:00",
    //             start: "2026-07-24T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-07-26T02:59:00-04:00",
    //             start: "2026-07-25T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-07-27T02:59:00-04:00",
    //             start: "2026-07-26T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-08-01T02:59:00-04:00",
    //             start: "2026-07-31T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-08-02T02:59:00-04:00",
    //             start: "2026-08-01T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-08-03T02:59:00-04:00",
    //             start: "2026-08-02T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-08-08T02:59:00-04:00",
    //             start: "2026-08-07T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-08-09T02:59:00-04:00",
    //             start: "2026-08-08T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-08-10T02:59:00-04:00",
    //             start: "2026-08-09T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-08-15T02:59:00-04:00",
    //             start: "2026-08-14T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-08-16T02:59:00-04:00",
    //             start: "2026-08-15T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-08-17T02:59:00-04:00",
    //             start: "2026-08-16T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-08-22T02:59:00-04:00",
    //             start: "2026-08-21T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-08-23T02:59:00-04:00",
    //             start: "2026-08-22T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-08-24T02:59:00-04:00",
    //             start: "2026-08-23T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-08-29T02:59:00-04:00",
    //             start: "2026-08-28T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-08-30T02:59:00-04:00",
    //             start: "2026-08-29T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-08-31T02:59:00-04:00",
    //             start: "2026-08-30T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-09-05T02:59:00-04:00",
    //             start: "2026-09-04T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-09-06T02:59:00-04:00",
    //             start: "2026-09-05T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-09-07T02:59:00-04:00",
    //             start: "2026-09-06T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-09-12T02:59:00-04:00",
    //             start: "2026-09-11T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-09-13T02:59:00-04:00",
    //             start: "2026-09-12T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-09-14T02:59:00-04:00",
    //             start: "2026-09-13T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-09-19T02:59:00-04:00",
    //             start: "2026-09-18T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-09-20T02:59:00-04:00",
    //             start: "2026-09-19T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-09-21T02:59:00-04:00",
    //             start: "2026-09-20T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-09-26T02:59:00-04:00",
    //             start: "2026-09-25T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-09-27T02:59:00-04:00",
    //             start: "2026-09-26T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-09-28T02:59:00-04:00",
    //             start: "2026-09-27T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-10-03T02:59:00-04:00",
    //             start: "2026-10-02T03:00:00-04:00",
    //           },
    //           {
    //             end: "2026-10-04T02:59:00-04:00",
    //             start: "2026-10-03T03:00:00-04:00",
    //           },
    //         ],
    //         banner: null,
    //         cause: "PARADE",
    //         created_at: "2025-09-26T16:16:46-04:00",
    //         description:
    //           "Missed stops:\r\nWashington St @ New Derby St\r\nWashington St @ Church St",
    //         duration_certainty: "KNOWN",
    //         effect: "DETOUR",
    //         header:
    //           "Route 450 outbound will be detoured every Friday, Saturday, and Sunday in October, from start to end of service, for Salem Haunted Happenings. Connections can be made at Essex St @ Summer St & Salem Depot",
    //         image: null,
    //         image_alternative_text: null,
    //         informed_entity: [
    //           {
    //             stop: "4562",
    //             direction_id: 0,
    //             route_type: 3,
    //             route: "450",
    //             activities: ["BOARD", "EXIT"],
    //           },
    //           {
    //             stop: "4563",
    //             direction_id: 0,
    //             route_type: 3,
    //             route: "450",
    //             activities: ["BOARD", "EXIT"],
    //           },
    //         ],
    //         lifecycle: "NEW",
    //         service_effect: "Route 450 detour",
    //         severity: 7,
    //         short_header:
    //           "Rt. 450 OB. will be detoured every Fri, Sat, & Sun in Oct, all day. Connections can be made at Essex St @ Summer St & Salem Depot",
    //         timeframe: null,
    //         updated_at: "2025-10-03T02:30:02-04:00",
    //         url: null,
    //       },
    //       id: "668575",
    //       links: {
    //         self: "/alerts/668575",
    //       },
    //       type: "alert",
    //     },
    //     {
    //       attributes: {
    //         active_period: [
    //           {
    //             end: null,
    //             start: "2025-10-27T03:00:00-04:00",
    //           },
    //         ],
    //         banner: null,
    //         cause: "UNKNOWN_CAUSE",
    //         created_at: "2025-10-03T11:44:24-04:00",
    //         description:
    //           "-Construction and service updates for the Franklin/Foxboro, Providence/Stoughton, and Fairmount Lines will be provided as work progresses.\r\n\n-Holiday service: On Thursday, November 27th, 2025 (Thanksgiving Day), Thursday, December 25th, 2025 (Christmas Day), Thursday, January 1st, 2026 (New Year’s Day), and Monday, February 16th, 2026 (President’s Day) all lines will operate on a weekend schedule. On Tuesday, November 11th, 2025 (Veterans' Day), Friday, November 28th, 2025 (Day after Thanksgiving), Monday, January 19th, 2026 (Martin Luther King Jr. Day), and Monday, April 20th, 2026 (Patriot’s Day), all lines will operate on a regular weekday schedule.",
    //         duration_certainty: "UNKNOWN",
    //         effect: "SCHEDULE_CHANGE",
    //         header:
    //           "The Providence/Stoughton Line construction schedule has been adjusted & allows for Amtrak’s emergency infrastructure repairs to continue. Those changes will go into effect on October 27. The updated schedule is available on mbta.com.",
    //         image: null,
    //         image_alternative_text: null,
    //         informed_entity: [
    //           {
    //             route_type: 2,
    //             route: "CR-Providence",
    //             activities: ["BOARD", "EXIT", "RIDE"],
    //           },
    //         ],
    //         lifecycle: "UPCOMING",
    //         service_effect: "Providence/Stoughton Line schedule change",
    //         severity: 1,
    //         short_header:
    //           "The Prov/Stoughton Ln construction schedule has been adjusted & allows for Amtrak’s emergency infrastructure repairs to continue. Those",
    //         timeframe: "starting October 27",
    //         updated_at: "2025-10-03T11:44:24-04:00",
    //         url: "https://www.mbta.com/schedules/commuter-rail",
    //       },
    //       id: "669829",
    //       links: {
    //         self: "/alerts/669829",
    //       },
    //       type: "alert",
    //     },
    //   ],
    //   jsonapi: {
    //     version: "1.0",
    //   },
    // };

    const ul = document.createElement("ul");
    data.data.forEach((alert) => {
      const {
        active_period,
        cause,
        description,
        service_effect,
        severity,
        short_header,
        updated_at,
      } = alert.attributes;
      const li = document.createElement("li");
      const status = active_period.end ? "inactive" : "active";

      li.innerHTML = `
        <p>${short_header}</p>
        <p>${status}</p>
        <p>${cause}</p>
        <p>Effect: ${service_effect}</p>
        <p>${severity}</p>
        <p>${description}</p>
        <p>Last updated: ${updated_at}</p>
      `;
      ul.appendChild(li);
    });

    document.getElementById("container").appendChild(ul);
  })
  .catch((err) => console.error(err));
