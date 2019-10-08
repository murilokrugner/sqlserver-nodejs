/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RA1010', {
    RA1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    RA1_CURSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    RA1_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    RA1_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA1_AREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RA1_DURACA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA1_UNDURA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA1_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA1_HORAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    RA1_PROD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    RA1_TIPOPP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RA1_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
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
    RA1_QTDMIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RA1_IMPRIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    RA1_CATEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    RA1_CJETAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    }
  }, {
    tableName: 'RA1010'
  });
};
