/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('JMO010', {
    JMO_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    JMO_CODUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    JMO_TPUSR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    JMO_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    JMO_DTBLOQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    JMO_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    JMO_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    JMO_NUMRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    JMO_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    JMO_LOCACE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    JMO_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    JMO_CODPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    }
  }, {
    tableName: 'JMO010'
  });
};
