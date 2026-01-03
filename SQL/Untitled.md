**SQL QUERY FOR ALL ASSIGNMENTS=======================>>>>>.**



SELECT \*

FROM EMP;



EMPNO ENAME      JOB              MGR HIREDATE         SAL       COMM     DEPTNO

----- ---------- --------- ---------- --------- ---------- ---------- ----------

&nbsp;7369 SMITH      CLERK           7902 17-DEC-80        800                    20

&nbsp;7499 ALLEN      SALESMAN        7698 20-FEB-81       1600        300         30

&nbsp;7521 WARD       SALESMAN        7698 22-FEB-81       1250        500         30

&nbsp;7566 JONES      MANAGER         7839 02-APR-81       2975                    20

&nbsp;7654 MARTIN     SALESMAN        7698 28-SEP-81       1250       1400         30

&nbsp;7698 BLAKE      MANAGER         7839 01-MAY-81       2850                    30

&nbsp;7782 CLARK      MANAGER         7839 09-JUN-81       2450                    10

&nbsp;7788 SCOTT      ANALYST         7566 19-APR-87       3000                    20

&nbsp;7839 KING       PRESIDENT            17-NOV-81       5000                    10

&nbsp;7844 TURNER     SALESMAN        7698 08-SEP-81       1500          0         30

&nbsp;7876 ADAMS      CLERK           7788 23-MAY-87       1100                    20

&nbsp;7900 JAMES      CLERK           7698 03-DEC-81        950                    30

&nbsp;7902 FORD       ANALYST         7566 03-DEC-81       3000                    20

&nbsp;7934 MILLER     CLERK           7782 23-JAN-82       1300                    10









SQL> SELECT \*

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE JOB='CLERK' AND SAL>1500;



no rows selected



SQL> SELECT \* 

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE JOB='CLERK' AND SAL<1500;



&nbsp;    EMPNO ENAME      JOB              MGR HIREDATE         SAL       COMM     DEPTNO

---------- ---------- --------- ---------- --------- ---------- ---------- ----------

&nbsp;     7369 SMITH      CLERK           7902 17-DEC-80        800                    20

&nbsp;     7876 ADAMS      CLERK           7788 23-MAY-87       1100                    20

&nbsp;     7900 JAMES      CLERK           7698 03-DEC-81        950                    30

&nbsp;     7934 MILLER     CLERK           7782 23-JAN-82       1300                    10



SQL> SELECT ENAME, HIREDATE

&nbsp; 2  FROM EMP

&nbsp; 3  WHERE JOB='MANAGER' AND DEPTNO=30;



ENAME      HIREDATE

---------- ---------

BLAKE      01-MAY-81

