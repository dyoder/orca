/*! kibana - v3.1.0 - 2014-06-06
 * Copyright (c) 2014 Rashid Khan; Licensed Apache License */

define(["require","config","lodash","lib/ClusterState/getState","lib/ClusterState/getIndices","lib/ClusterState/refreshState","lib/ClusterState/explainStatus","lib/ClusterState/groupIndicesByState"],function(a){var b=a("config"),c=a("lodash"),d=a("lib/ClusterState/getState"),e=a("lib/ClusterState/getIndices"),f=a("lib/ClusterState/refreshState"),g=a("lib/ClusterState/explainStatus"),h=a("lib/ClusterState/groupIndicesByState");return function(a){a.factory("$clusterState",function(a,i,j,k){var l=c.partial(d,i,b),m=c.partial(e,j,k),n=a.$new(!0);n.state=!1,n.version=0;var o=c.partial(f,n,l,m);return n.refresh=o,n.refresh(),a.$on("refresh",n.refresh),n.explainStatus=g.bind(null,n),n.groupIndicesByState=h.bind(null,n),n})}});