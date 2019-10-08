/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CS4010', {
    CS4_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CS4_CODREV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CS4_CONTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CS4_CTAREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CS4_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CS4_ENTREF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CS4_TPUTIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    CS4_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CS4_NATCTA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CS4_CTASUP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    }
  }, {
    tableName: 'CS4010'
  });
};
