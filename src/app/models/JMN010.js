/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('JMN010', {
    JMN_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    JMN_RESERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    JMN_DTMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    JMN_DTLIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    JMN_EXEMPL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    JMN_PUBLIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    JMN_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    JMN_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    JMN_CODUSU: {
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
    tableName: 'JMN010'
  });
};
