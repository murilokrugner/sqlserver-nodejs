/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TSSTR2', {
    ENTIDADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DOCRECNO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TIPODOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    PROCESSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    SUBPROC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DTPROCINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRPROCINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DTPROCFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRPROCFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    SERVERID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    DTINCLUSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    HRINCLUSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    GROUPID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    LOGID: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    PARAMETROS: {
      type: "IMAGE",
      allowNull: true
    },
    AMBIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    REPROCESSO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    SEQUENCIA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TSSTR2'
  });
};
