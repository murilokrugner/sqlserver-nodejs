/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ST1010', {
    T1_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    T1_CODFUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    T1_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    T1_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    T1_TURNO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    T1_DISPONI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T1_SALARIO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T1_TEMMINI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    T1_CONTRAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    T1_TIPOFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T1_SENHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    T1_EQUIPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    T1_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    T1_DTFIMDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
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
    T1_CODUSU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    T1_TIPATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    T1_CRACHA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    T1_BITMAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    }
  }, {
    tableName: 'ST1010'
  });
};
