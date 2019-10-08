/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CSK010', {
    CSK_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CSK_CODREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CSK_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CSK_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CSK_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CSK_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CSK_CTAREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CSK_VALDEB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CSK_VALCRE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    CSK_PERIOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CSK_REGIST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    CSK_VALINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CSK_INDINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CSK_VALFIN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CSK_INDFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CSK_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CSK_NATCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CSK_CTASUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CSK_NIVEL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'CSK010'
  });
};
