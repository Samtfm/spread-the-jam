# Component Hierarchy

### AuthFormContainer
 - AuthForm
 - Errors

### CitiesContainer
 - Cities

### CityContainer
 - CityHeader
 - EventIndex

### EventIndex
  - EventIndexItem

### DashboardContainer
  - DashboardHeader
  - DashboardIndex

### DashboardIndex
  - DashboardIndexItem

### EventFormContainer
  - EventForm
  - Errors

  ## Routes

  |Path                        | Component              |
  |----------------------------|------------------------|
  | "/signup"                  | "AuthFormContainer" |
  | "/signin"                  | "AuthFormContainer" |
  | "/dashboard"               | "DashboardContainer" |
  | "/new-event"               | "EventFormContainer" |
  | "/cities/"                 | "CitiesContainer" |
  | "/cities/:cityId"          | "CityContainer" |
