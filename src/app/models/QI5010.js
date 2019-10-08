/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QI5010', {
    QI5_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI5_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    QI5_REV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI5_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI5_TPACAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI5_FILMAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI5_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QI5_PRAZO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QI5_REALIZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    QI5_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QI5_DESCRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    QI5_DESCCO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QI5_DESCOB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QI5_PEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QI5_PLAGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QI5_GRAGR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    QI5_AGREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QI5_REJEIT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QI5_OBRIGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QI5_PRZHR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    QI5_CJCOD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI5_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    QI5_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    QI5_PRJEDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    QI5_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    QI5_REALHR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    QI5_AUXOBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QI5_TRFACT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    QI5_ETPRLA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    QI5_PARSEQ: {
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
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    QI5_MAT2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                  '
    }
  }, {
    tableName: 'QI5010'
  });
};
