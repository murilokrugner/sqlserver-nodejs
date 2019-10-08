/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMY010', {
    TMY_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TMY_NUMASO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMY_NUMFIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TMY_EXAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMY_DTPROG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMY_DTGERA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMY_DTEMIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMY_DTCANC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TMY_INDPAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TMY_CODUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TMY_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                        '
    },
    TMY_NATEXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TMY_QTDTRA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TMY_EMPFUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TMY_FILFUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TMY_NOVFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TMY_USERGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    TMY_NOVCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    TMY_USERGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    TMY_NOVTAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TMY_ALTURA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TMY_CONFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TMY_TMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TMY_NOVDEP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
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
    tableName: 'TMY010'
  });
};
